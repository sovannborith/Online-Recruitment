export interface UserEntity {
    id: number;
    userName: string;
    firstName?: string;
    lastName?: string;
    userPassword?: string;
    emailId?: string;
    mobilePhone?: string;
    isActive?: boolean;
    createdDate?: Date;
  }
