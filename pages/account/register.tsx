import { useRouter } from 'next/router'
import Link from 'next/link'
import ErrorPage from 'next/error'
import { useForm } from 'react-hook-form';
import AppLayout from '../../components/AppLayout';



export default function Register() {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm();

  function onSubmit() {
    console.log('계정 생성')
    // return userService.login(username, password)
    // .then(() => {
    // get return url from query parameters or default to '/'
    // const returnUrl = router.query.returnUrl || '/';
    // router.push(returnUrl);
    // })
    // .catch(alertService.error);
  }

  return (
    <AppLayout>
      <div >
        <div>email
          {/* register your input into the hook by invoking the "register" function */}
          <input placeholder='email' {...register("example")} />
        </div>
        <div>
          {/* include validation with required or other standard HTML validation rules */}
          password
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </div>
        <div>
          <button disabled={formState.isSubmitting} className="btn btn-primary" onClick={onSubmit}>
            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
            계정생성
          </button>
        </div>
      </div>
    </AppLayout>
  )
}