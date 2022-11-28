import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { Review } from "../../types/review";
import { requestBackend } from "../../util/requests";
import ButtonIcon from "../ButtonIcon";

import './styles.css';


type Props = {
    movieId: string;
    onIsertReview: (review: Review) => void;
  };
  
  type FormData = {
    movieId: number;
    text: string;
  };
  
  const FormReviews = ({ movieId, onIsertReview }: Props) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm<FormData>();
  
    const onSubmit = (formData: FormData) => {
      formData.movieId = parseInt(movieId);
  
      const config: AxiosRequestConfig = {
        method: 'POST',
        url: '/reviews',
        data: formData,
        withCredentials: true,
      };
  
      requestBackend(config)
        .then((response) => {
          setValue('text', '');
          onIsertReview(response.data);
        })
        .catch((error) => {
          console.log('ERRO AO SALVAR !!', error);
        });
    };
  
    return(
        <div className="base-card base-card-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <input
            {...register('text', {
              required: "Campo obrigatório!",
            })}
            type="text"
            className={`form-control base-input-form ${errors.text ? 'is-invalid' : ''}`}
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
        </div>
        <div className="invalid-feedback d-block base-card-invalid-feedback">{errors.text?.message}</div>
        <div className="button-save">
          <ButtonIcon text="SALVAR AVALIAÇÃO" />
        </div>
      </form>
    </div>
    )
}
export default FormReviews;