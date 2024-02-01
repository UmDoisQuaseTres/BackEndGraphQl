import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Task {
  @Field()
  user: string;

  @Field()
  public: boolean;

  @Field()
  task: string;
}

export { Task };
