import * as React from "react";
import { Search } from "./repositories/Search";
import { AppLayout } from "./ui/AppLayout";
import { RepositoriesList } from "./repositories/RepositoriesList";
import { Progress } from "./ui/Progress";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <AppLayout>
      <Search value={searchValue} onChange={setSearchValue} />
      <React.Suspense fallback={<Progress />}>
        <RepositoriesList searchValue={searchValue} />
      </React.Suspense>
    </AppLayout>
  );
}

export default App;
