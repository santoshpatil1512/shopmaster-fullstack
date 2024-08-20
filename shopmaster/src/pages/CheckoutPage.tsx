import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface CheckoutFormInputs {
  name: string;
  address: string;
  cardNumber: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  cardNumber: Yup.string().required('Card number is required').min(16, 'Card number must be 16 digits'),
});

const CheckoutPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CheckoutFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <input
          {...register('name')}
          placeholder="Name"
          className="p-2 border rounded-lg w-full mb-2"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register('address')}
          placeholder="Address"
          className="p-2 border rounded-lg w-full mb-2"
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}

        <input
          {...register('cardNumber')}
          placeholder="Card Number"
          className="p-2 border rounded-lg w-full mb-2"
        />
        {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}

        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg w-full">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
