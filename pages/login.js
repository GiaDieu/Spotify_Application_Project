import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

function login({ providers }) {
  return (
    <div>
      <img
        className="mb-5 w-52"
        src="https://links.papareact.com/9xl"
        alt="spotify-image"
      />

      {Object.values(providers).map((provider, i) => (
        <div key={i}>
          <button>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default login;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
