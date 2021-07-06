import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";
const user = {
  name: "吾輩",
  image: "https://source.unsplash.com/FilM6ng7VGQ",
  email: "12345@hoge.foo",
  phone: "000-1234-5678",
  company: {
    name: "株式会社猫である"
  },
  website: "https://google.co.jp"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
