import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserMessage {
  @Field()
  message: string;
}
