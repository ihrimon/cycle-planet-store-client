{/* <CustomForm
  onSubmit={onSubmit}
  submitLabel='Place Order'
  defaultValues={registerDefaultValues}
>
  <CustomInput type='text' name='name' label='Full name*' />
  <div className='grid grid-cols-2 gap-4'>
    <CustomInput type='email' name='email' label='Email address *' />
    <CustomInput type='number' name='number' label='Phone number *' />
    <CustomInput type='text' name='country' label='Country / Region *' />
    <CustomInput type='text' name='state' label='State / County *' />
  </div>
  <CustomInput
    type='text'
    name='state'
    label='Street address *'
    placeholder='House no. street name, apartment, unit, etc.'
  />
  <div className='grid grid-cols-2 gap-4'>
    <CustomInput type='email' name='email' label='Town / City *' />
    <CustomInput type='number' name='number' label='Postcode / ZIP *' />
  </div>
</CustomForm>; */}






  {/* <div className='space-y-4'>
            <h1>Billing Information</h1>
            <div className='space-y-2'>
              <Label htmlFor='name'>Full Name *</Label>
              <Controller
                name='name'
                control={control}
                rules={{ required: 'Full name is required' }}
                render={({ field }) => <Input {...field} />}
              />
              {errors.name && (
                <p className='text-red-500'>{errors.name.message}</p>
              )}
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email Address *</Label>
                <Controller
                  name='email'
                  control={control}
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.email && (
                  <p className='text-red-500'>{errors.email.message}</p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone *</Label>
                <Controller
                  name='phone'
                  control={control}
                  rules={{ required: 'Phone number is required' }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.phone && (
                  <p className='text-red-500'>{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='country'>Country / Region *</Label>
                <Controller
                  name='country'
                  control={control}
                  rules={{ required: 'Country is required' }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.country && (
                  <p className='text-red-500'>{errors.country.message}</p>
                )}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='state'>State / County *</Label>
                <Controller
                  name='state'
                  control={control}
                  rules={{ required: 'State is required' }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.state && (
                  <p className='text-red-500'>{errors.state.message}</p>
                )}
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='streetAddress'>Street Address *</Label>
              <Controller
                name='streetAddress'
                control={control}
                rules={{ required: 'Street address is required' }}
                render={({ field }) => <Input {...field} />}
              />
              {errors.streetAddress && (
                <p className='text-red-500'>{errors.streetAddress.message}</p>
              )}
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='city'>Town / City *</Label>
                <Controller
                  name='city'
                  control={control}
                  rules={{ required: 'City is required' }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.city && (
                  <p className='text-red-500'>{errors.city.message}</p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='postcode'>Postcode / ZIP *</Label>
                <Controller
                  name='postcode'
                  control={control}
                  rules={{ required: 'Postcode is required' }}
                  render={({ field }) => <Input {...field} type='number' />}
                />
                {errors.postcode && (
                  <p className='text-red-500'>{errors.postcode.message}</p>
                )}
              </div>
            </div>
          </div> 
}*/}


 /* Progress Steps */
        /* <div className='mb-8'>
          <div className='flex items-center justify-center space-x-4'>
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm',
                currentStep >= 1
                  ? 'bg-[#91b33b] text-white'
                  : 'bg-gray-200 text-gray-500'
              )}
            >
              1
            </div>
            <div
              className={cn(
                'h-0.5 w-20',
                currentStep >= 2 ? 'bg-[#91b33b]' : 'bg-gray-200'
              )}
            ></div>
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm',
                currentStep >= 2
                  ? 'bg-[#91b33b] text-white'
                  : 'bg-gray-200 text-gray-500'
              )}
            >
              2
            </div>
            <div
              className={cn(
                'h-0.5 w-20',
                currentStep >= 3 ? 'bg-[#91b33b]' : 'bg-gray-200'
              )}
            ></div>
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm',
                currentStep >= 3
                  ? 'bg-[#91b33b] text-white'
                  : 'bg-gray-200 text-gray-500'
              )}
            >
              3
            </div>
          </div>
          <div className='flex justify-center mt-2 text-sm'>
            <div className='text-center w-32'>Your Cart</div>
            <div className='text-center w-32'>Checkout Details</div>
            <div className='text-center w-32'>Order Complete</div>
          </div>
        </div> */





                        /* <div className='space-y-4 border-t pt-4'>
                      <div className='space-y-2'>
                        <Label htmlFor='cardNumber'>Card Number</Label>
                        <div className='relative'>
                          <Input
                            id='cardNumber'
                            placeholder='**** **** **** ****'
                          />
                          <CreditCard className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
                        </div>
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                          <Label htmlFor='expiry'>Expiration (MM/YY)</Label>
                          <Input id='expiry' placeholder='MM/YY' />
                        </div>
                        <div className='space-y-2'>
                          <Label htmlFor='cvc'>Security Code</Label>
                          <div className='relative'>
                            <Input id='cvc' placeholder='CVC' />
                            <Lock className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
                          </div>
                        </div>
                      </div>
                    </div> */


