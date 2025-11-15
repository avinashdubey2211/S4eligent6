import React, { useState } from "react";
import Text from "../../../Shared/Text";
import CustomDiv from "../../../Shared/CustomDiv";
import { Info } from "@mui/icons-material";
import CustomTextField from "../../../Shared/CustomTextField";
import CustomButton from "../../../Shared/CustomButton";
import { useQuery } from "react-query";
import { profileFn } from "../../../Services/Profile";

const ReferralAndEarn = () => {
  const [copy, setCopy] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const { data } = useQuery(["profile"], () => profileFn());
  const copyText = document.getElementById("myInput");
  const copyTextLink = document.getElementById("myInputLink");

  const onCopy = () => {
    setCopy(true);
    copyText.select();
    navigator?.clipboard?.writeText(copyText.value);
  };
  const onCopyLink = () => {
    setCopyLink(true);
    copyTextLink.select();
    navigator?.clipboard?.writeText(copyTextLink.value);
  };

  return (
    <CustomDiv className="flex lg:flex-row flex-col-reverse justify-between items-center p-4">
      <CustomDiv className="flex flex-col gap-3 lg:p-0 p-5 lg:w-1/2">
        <Text className="text-xl font-semibold">Refer a friend</Text>
        <Text>
          Both can get {data?.data?.data?.profile_data?.[0]?.referral_income}{" "}
          Coins
        </Text>
        <Text className="text-red-400 text-lg font-semibold">
          <Info /> How it works?
        </Text>
        <span className="flex gap-3">
          <span className="rounded-full text-xl font-bold">1.</span>
          <span>
            <Text>Invite Your Friends</Text>
            <Text>Share your link with them</Text>
          </span>
        </span>
        <span className="flex gap-3">
          <span className="rounded-full text-xl font-bold">2.</span>
          <span>
            <Text>Ask your friends to register.</Text>
            <Text>Both of you earn</Text>
          </span>
        </span>

        <span className="flex gap-3">
          <span className="rounded-full text-xl font-bold">3.</span>
          <span>
            <Text>You can save on your orders</Text>
            <Text>Your friend gets money too</Text>
          </span>
        </span>
        <span>
          <Text>Referral Code</Text>
          <CustomTextField
            color="success"
            id="myInput"
            value={data?.data?.data?.profile_data?.[0]?.user_referral_code}
            endDecorator={
              <CustomButton color="success" onClick={() => onCopy()}>
                {copy ? "Copid!" : "Copy"}
              </CustomButton>
            }
            className="!w-10/12 !pl-3 !p-0"
          />
        </span>
        <span>
          <Text>Referral Link</Text>
          <CustomTextField
            id="myInputLink"
            color="success"
            value={data?.data?.data?.profile_data?.[0]?.referral_link}
            endDecorator={
              <CustomButton color="success" onClick={() => onCopyLink()}>
                {copyLink ? "Copid!" : "Copy"}
              </CustomButton>
            }
            className="!w-10/12 !pl-3 !p-0"
          />
        </span>
      </CustomDiv>
      <img
        src="https://png.pngtree.com/template/20220407/ourmid/pngtree-refer-a-friend-flat-design-illustration-with-megaphone-on-screen-mobile-image_963504.jpg"
        alt=""
        className="lg:w-1/2"
      />
    </CustomDiv>
  );
};

export default ReferralAndEarn;
