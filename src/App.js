import logo from './logo.svg';
import './App.css';
import './Form'
import Form from './Form';

function App() {
  const dataList = {
    prefectures: [
      {
        id: 1,
        name: "東京都",
      },
      {
        id: 2,
        name: "神奈川県",
      },
      {
        id: 3,
        name: "千葉県",
      },
      {
        id: 3,
        name: "埼玉県",
      },
    ],
    municipalities: [
      {
        id: 1,
        prefectureId: 1,
        name: "千代田区",
      },
      {
        id: 2,
        prefectureId: 1,
        name: "世田谷区",
      },
      {
        id: 1,
        prefectureId: 1,
        name: "港区",
      },
      {
        id: 1,
        prefectureId: 1,
        name: "品川区",
      },
    ],
  };
  const datas = JSON.stringify(dataList);
  return (
    <div>
      <Form title={"サンプルフォーム"} data={datas} />
    </div>
  );
}

export default App;
