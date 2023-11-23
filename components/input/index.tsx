import Input from './input';
import Phone from './phone';
import Password from './password';

type InternalFormType = typeof Input;

type CompoundedComponent = InternalFormType & {
    Phone: typeof Phone;
    Password: typeof Password
};
  
const Container = Input as CompoundedComponent;
Container.Phone = Phone;
Container.Password = Password;

export default Container
