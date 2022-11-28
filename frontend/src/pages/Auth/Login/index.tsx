import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext';
import ButtonIcon from '../../../components/ButtonIcon';
import { getTokenData } from '../../../util/auth';
import { requestBackendLogin } from '../../../util/requests';
import { saveAuthData } from '../../../util/storage';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
    
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)

      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.push('/movies');
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };
  return (
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        {hasError && (
          <div className="alert alert-danger">Login inválido!</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('username', {
                required: "Campo obrigatório",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email inválido'
                }
              })}
              type="text"
              className={`form-control base-input base-input-768 ${errors.username ? 'is-invalid': ''}`}
              placeholder="Email"
              name="username"
            />
             <div className="invalid-feedback d-block">{errors.username?.message}</div>
          </div>
          <div className="mb-2">
            <input
              {...register('password', {
                required: "Campo obrigatório"
              })}
              type="password"
              className={`form-control base-input base-input-768 ${errors.password ? 'is-invalid': ''}`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">{errors.password?.message}</div>
          </div>
          <div className="button-login">
            <ButtonIcon text="FAZER LOGIN" />
          </div>
        </form>
      </div>
  );
};
export default Login;
