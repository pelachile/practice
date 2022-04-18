const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      {' '}
      <div className='bg-nuetral-300 p-5 rounded-md'>
        <img
          src='images/launching.png'
          alt='Rocket Ship to the moon'
          className='mx-auto p-1'
        />
        <h2 className='text-nuetral-1100 font-poppins text-3xl text-center mb-5'>
          Create an account
        </h2>

        <form className='text-nuetral-1100'>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <label htmlFor='firstName' className='text-sm'>
              First Name
              <input
                type='text'
                name='firstName'
                className='w-full block bg-nuetral-bg border rounded border-nuetral-300'
              />
            </label>
            <label htmlFor='lastName' className='text-sm'>
              Last Name
              <input
                type='text'
                name='lastName'
                className='w-full block bg-nuetral-bg border rounded border-nuetral-300'
              />
            </label>
          </div>
          <div>
            <label htmlFor='email' className='text-sm'>
              Email
              <input
                type='text'
                name='email'
                className='w-full block bg-nuetral-bg border rounded border-nuetral-300'
              />
            </label>
            <label htmlFor='password' className='text-sm'>
              Password
              <input
                type='password'
                name='password'
                className='w-full block bg-nuetral-bg border rounded border-nuetral-300'
              />
            </label>
            <label htmlFor='confirmPassword' className='text-sm'>
              Confirm Password
              <input
                type='password'
                name='password'
                className='w-full block bg-nuetral-bg border rounded border-nuetral-300'
              />
            </label>
          </div>
          <button className='bg-brand-1 text-nuetral-1100 rounded p-5 w-full mt-5'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
