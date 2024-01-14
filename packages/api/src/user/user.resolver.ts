import { Resolver, Query } from '@nestjs/graphql';
import { UserMessage } from './model/user-message.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserMessage)
  async MeQuery(): Promise<UserMessage> {
    const message = await this.userService.Test();

    return {
      message,
    };
  }
}
