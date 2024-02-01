import { PrismaClient } from "@prisma/client";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Task } from "./Task";
import { validate } from "class-validator";

const prisma = new PrismaClient();

@InputType()
class TaskInput {
  @Field()
  user: string;

  @Field()
  public: boolean;

  @Field()
  task: string;
}

@Resolver()
class TaskResolver {
  @Mutation(() => Task)
  async addTask(@Arg("taskInput") taskInput: TaskInput): Promise<Task> {
    // Validate taskInput using class-validator
    const errors = await validate(taskInput);
    if (errors.length > 0) {
      throw new Error(
        `Validation failed: ${errors.map((e) => e.toString()).join(", ")}`
      );
    }

    // If validation passes, create the task
    const task = await prisma.task.create({ data: taskInput });
    return task;
  }

  @Query(() => [Task])
  async task(): Promise<Task[]> {
    const task = await prisma.task.findMany();
    return task;
  }
}

export { TaskResolver };
