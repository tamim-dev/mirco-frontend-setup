import BankImage from 'assets/images/bnk.png';
import CardHeading from 'components/common/CardHeading';
import OnboardClientCard from 'components/OnboardClientCard';

const OnboardMSP = () => {
  return (
    <div className="rounded p-2.5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
      <CardHeading title="On board MSP" />
      <div className="mt-5 flex h-[384px] flex-col gap-y-3 overflow-y-scroll px-2.5">
        {Array.from({ length: 10 }).map((_, index) => (
          <OnboardClientCard
            key={index}
            image={BankImage}
            name="Bangladesh Bank"
            count={80}
            isLast={index === 9}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardMSP;
