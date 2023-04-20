import React from 'react';
import { FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Создаем стилизованный компонент с использованием styled-components
const AnimatedReactIcon = styled(motion.div)`
  transform: translate(-50%, -50%);
  position: relative;
  left: 14px;
  margin-left: 3px;
  width: 30px;
  height: 27px;
  transform: scale(1.4);
  margin-left: auto;
`;
const Icon = styled(FaReact)`
  width: 100%;
  height: 100%;
  fill: #3fa0bb;
`;

export const FaReactStyled = () => {
  return (
    <AnimatedReactIcon
      //   initial={{}} // начальные стили анимации
      animate={{ rotate: 360 }} // стили анимации во время анимации
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3,
        repeatType: 'reverse',
        type: 'tween',
      }}
    >
      <Icon />
    </AnimatedReactIcon>
  );
};
