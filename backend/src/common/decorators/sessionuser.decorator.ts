import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SessionUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return {'name': 'd.kanai'}
    // return data ? user?.[data] : user;
    // return request.user;
  },
);