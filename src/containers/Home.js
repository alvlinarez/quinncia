import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import Game from '../components/Game';

const Home = () => {
  // If progressbar percentage is completed
  const [completed, setCompleted] = useState(false);
  return (
    <Layout>
      <>
        <Game />
        <ProgressBar completed={completed} setCompleted={setCompleted} />
      </>
    </Layout>
  );
};

export default Home;
