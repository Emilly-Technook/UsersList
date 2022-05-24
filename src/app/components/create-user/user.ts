export class User {
  name: string = '';
  role: Role = Role.DELIVERER;
  status: Status = Status.ACTIVE;
  createAt: Date = new Date();
  updateAt?: Date;
  deliveriesMade: number = 0;
  deliveriesInProgress: number = 0;
}
enum Status{
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  VACATION = 'Vacation',
}
enum Role{
  DELIVERER = 'Deliverer',
  MANAGER = 'Manager',
  DRIVER = 'Driver',
  ADMINISTRATOR = 'Administrator',
}
