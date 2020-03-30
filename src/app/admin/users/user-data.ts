import { InMemoryDbService } from 'angular-in-memory-web-api';

import { UserEntity } from '../../model/user-entity';

export class UserData implements InMemoryDbService {

  createDb() {
    const users: UserEntity[] = [
      {
        id: 1,
        userName: 'sovannborith_yun',
        firstName: 'Sovannborith',
        lastName: 'Yun',
        userPassword: '123456',
        emailId: 'yun.sovannborith@gmail.com',
        mobilePhone: '85512 544618',
        isActive: true,
        createdDate: new Date(),
      },
      {
        id: 2,
        userName: 'borith',
        firstName: 'Borith',
        lastName: 'Yun',
        userPassword: '123456',
        emailId: 'yun.sovannborith@gmail.com',
        mobilePhone: '85512 544618',
        isActive: true,
        createdDate: new Date(),
      },
      {
        id: 3,
        userName: 'sovann',
        firstName: 'Sovann',
        lastName: 'Yun',
        userPassword: '123456',
        emailId: 'yun.sovannborith@gmail.com',
        mobilePhone: '85512 544618',
        isActive: true,
        createdDate: new Date(),
      },
      {
        id: 4,
        userName: 'dara',
        firstName: 'Dara',
        lastName: 'Yun',
        userPassword: '123456',
        emailId: 'yun.sovannborith@gmail.com',
        mobilePhone: '85512 544618',
        isActive: true,
        createdDate: new Date(),
      },
      {
        id: 5,
        userName: 'sophal',
        firstName: 'Sophal',
        lastName: 'Yun',
        userPassword: '123456',
        emailId: 'yun.sovannborith@gmail.com',
        mobilePhone: '85512 544618',
        isActive: true,
        createdDate: new Date(),
      }
    ];
    return { users };
  }
}
