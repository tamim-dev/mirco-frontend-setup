import { FC, useEffect } from 'react';

import AnalystCountCard from 'components/AnalystCountCard';
import Table from 'components/common/table/Table';
import Onboardmsp from 'components/OnboardMSP';
import useHomeServices from 'services/HomeServices';
import './home.css';

const HomePage: FC = () => {
  const HomeServices = useHomeServices();

  useEffect(() => {
    console.log(HomeServices);
    //? Testing demo services
    HomeServices.testApiSuccess()
      .then((resp: any) => console.log(':::Success::: ', resp))
      .catch((error: any) => console.log(':::Error::: ', error));

    // HomeServices.testApiError()
    //   .then((resp: any) => console.log(':::Success::: ', resp))
    //   .catch((error: any) => console.log(':::Error::: ', error));
  }, []);

  const columns = [
    { key: 'index', header: 'SL. No.' },
    { key: 'domainName', header: 'Domain Name' },
    { key: 'usage', header: 'Usage' },
    { key: 'lastUsed', header: 'Last Used' },
    { key: 'purchasedDate', header: 'Purchased Date' },
    { key: 'expireDate', header: 'Expire Date' },
  ];

  const data = Array.from({ length: 10 }).map((_, index) => ({
    index: index + 1,
    domainName: 'aspiretss.com',
    usage: 25,
    lastUsed: '12/03/2026 10:29 AM',
    purchasedDate: '12/03/2026',
    expireDate: '12/03/2026',
  }));

  return (
    <div className="w-full pl-[4.5%]">
      <div className="flex justify-between">
        <div className="w-[66.2%]">
          <div className="flex justify-between gap-x-3">
            <AnalystCountCard countNumber={80} countTitle="Total Course" />
            <AnalystCountCard countNumber={160} countTitle="Total Lesson" />
            <AnalystCountCard countNumber={12} countTitle="Total Package" />
            <AnalystCountCard countNumber={60} countTitle="MSP" />
            <AnalystCountCard countNumber={200} countTitle="Client" />
          </div>
          <div className="flex justify-between gap-x-4">
            {/* <LicenseStatus />
          <ContentsStatus /> */}
          </div>
        </div>
        <div className="w-[33.3%]">
          <Onboardmsp />
        </div>
      </div>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default HomePage;
