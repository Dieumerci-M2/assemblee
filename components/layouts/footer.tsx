import React from "react";
import FooterLogo from "../header/logo/footerLogo";
import { contacts } from "@/data/contacts";
import { quickLinks } from "@/data/quickLinks";
import Link from "next/link";
import { socialMedias } from "@/data/socialMedia";
import { subscriptionFooterZone } from "@/data/subscriptionFooterZone";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Footer() {
  return (
    <div id="footer" className="w-full bg-black text-white h-auto">
      <div className=" w-[80rem] flex justify-between h-72 m-auto p-6">
        <div className="  flex flex-col h-full p-2 gap-5 ">
          <div className="flex">
            <FooterLogo />
          </div>

          <ul className="w-full text-cream/60 text-sm flex-col flex gap-1">
            <li>{contacts.phoneNumber}</li>
            <li>{contacts.adress}</li>
            <li>{contacts.email}</li>
          </ul>
        </div>

        <div className="p-2 flex flex-col gap-5">
          <h3 className=" font-medium">{quickLinks.title}</h3>
          <ul className="w-full text-sm text-ccream/60 flex-col flex gap-1">
            {quickLinks.items.map((item) => (
              <li key={item.label}>
                <Link href={item.link}>
                  <span className=" capitalize">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-2 flex flex-col gap-5">
          <h3>{socialMedias.title}</h3>
          <ul className="w-full text-sm text-primary flex-col flex gap-1">
            {socialMedias.items.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-2 flex flex-col gap-5">
          <h2>{subscriptionFooterZone.title}</h2>
          <form>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder={subscriptionFooterZone.form.emailplaceholder}
              />
              <Button type="submit">
                {subscriptionFooterZone.form.buttonText}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
