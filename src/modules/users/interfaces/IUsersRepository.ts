import User from '../typeorm/entities/User';
import ICreateUserDTO from './dtos/ICreateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<number>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findByContactNumber(contactNumber: string): Promise<User | undefined>;
}
