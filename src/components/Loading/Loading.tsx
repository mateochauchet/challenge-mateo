import React from "react";

interface IProps {
  isLoading?: boolean;
}

const Loading: React.FC<IProps> = ({ isLoading = false }: IProps) => {
  if (!isLoading) return null;

  return <div>Loading...</div>;
};

export default Loading;
