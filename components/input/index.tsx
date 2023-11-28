import Input from './input';
import Phone from './phone';
import Password from './password';
import Code from './code';

type InternalFormType = typeof Input;

type CompoundedComponent = InternalFormType & {
    Phone: typeof Phone;
    Password: typeof Password;
    Code: typeof Code
};
  
const Container = Input as CompoundedComponent;
Container.Phone = Phone;
Container.Password = Password;
Container.Code = Code;

export default Container
