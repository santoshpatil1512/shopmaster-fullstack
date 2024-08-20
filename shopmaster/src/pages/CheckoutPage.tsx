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

  const onSubmit: SubmitHandler<CheckoutFormInputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Name</label>
        <input {...register('name')} placeholder="Name" className="w-full p-2 border rounded" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Address</label>
        <input {...register('address')} placeholder="Address" className="w-full p-2 border rounded" />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Card Number</label>
        <input {...register('cardNumber')} placeholder="Card Number" className="w-full p-2 border rounded" />
        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber.message}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Place Order</button>
    </form>
  );
};

export default CheckoutPage;
