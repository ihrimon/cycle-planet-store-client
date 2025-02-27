import customToaster from '@/utils/customToaster';

const CustomError = (err: string) => {
    const errorMessage = err || 'Something went wrong';

    console.log(err)

    customToaster({
      description: errorMessage,
      action: 'Try Again',
      actionType: 'error',
    });
}

export default CustomError