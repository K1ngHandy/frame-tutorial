import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmeqbjaHeUxrMDrqZGH81tm3aX29VZr5w9ZVzns6tPEJt7`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Test Frame',
  description: 'A frame to test unique Frame building',
  openGraph: {
    title: 'Test Frame',
    description: 'A frame to test unique Frame building',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/`]
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Test Frame</h1>
    </>
  );
}