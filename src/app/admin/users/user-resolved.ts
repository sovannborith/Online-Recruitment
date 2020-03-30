import { UserEntity } from '../../model/user-entity';

export interface UserResolved {
    user: UserEntity;
    error?: any;
  }
