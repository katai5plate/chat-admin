import React from "react";
import { Link } from "react-router-dom";

const Page: React.FC = () => (
  <div>
    <p>ここにチャットとかを出す</p>
    <Link to="/admin/">管理画面へ</Link>
  </div>
);

export default Page;
