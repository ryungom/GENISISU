'use client';

import Link from "next/link";
import { UNDERSCORE_NOT_FOUND_ROUTE_ENTRY } from "../../../node_modules/next/dist/shared/lib/constants";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Button from "../Button";

export default function Footer() {

  const route = useRouter()
  const btnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    route.push('https://github.com/NINI-Bros/GENISISU')
  }


  return (
    <footer>
      <figure>
        <Image src="/images/genisisu_logo_w.png" fill priority sizes="100%" alt=""/>
      </figure>
      <ul>
        <li className="f_github">
          <h4>GITHUB</h4>
          <ul className="footerInfo">
            <li><Link href="https://github.com/redcontroller">@redcontroller</Link></li>
            <li><Link href="https://github.com/sylee0102">@sylee0102</Link></li>
            <li><Link href="https://github.com/ryungom">@ryungom</Link></li>
          </ul>
        </li>
        <li className="f_skill">
          <h4>SKILL</h4>
          <ul className="footerInfo">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Zustand</li>
            <li>Vercel</li>
          </ul>
          <ul className="footerInfo">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Python</li>
          </ul>
        </li>
        <li className="f_copy">
          <span>© COPYRIGHT 2024 HYUNDAI MOGANS GENISISUYEON.  ALL RIGHTS RESERVED.</span>
        </li>
      </ul>
      <aside>
        <button onClick={(e) => btnClick(e)}><Link href="#">READ ME</Link></button>
      </aside>
    </footer>
  );
}