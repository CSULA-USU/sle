import { FluidContainer } from "@/components/FluidContainer";
import { Page } from "@/modules/Page";
import {HeaderAndImage} from '@/components/HeaderAndImage';
import { Typography } from "@/components/Typography";
export default function Vote() {
  return (
    <Page>
      <FluidContainer flex>
        {/* <HeaderAndImage></HeaderAndImage> */}
        <Typography variant="pageHeader">How to Vote</Typography>
        {/* <Image></Image> */}
      </FluidContainer>
    </Page>
  );
}
