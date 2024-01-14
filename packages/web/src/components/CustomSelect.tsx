import { UserDetails } from "@/features/Inbound-Page/InboundComponent";
import { useEffect, useState } from "react";
import {
  Button,
  FieldError,
  Key,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
  ValidationResult,
} from "react-aria-components";

export default function CustomSelect({
  header,
  listOfCountries,
  errorMessge,
  userDetails,
  setUserDetails,
}: {
  header: string;
  listOfCountries: string[];
  errorMessge?: string | ((validaton: ValidationResult) => string);
  userDetails: UserDetails;
  setUserDetails: (userDetails: UserDetails) => void;
}) {
  return (
    <Select
      isRequired
      onSelectionChange={(e) =>
        setUserDetails({
          ...userDetails,
          countryOfOrigin: e.toString(),
        })
      }
      className="flex flex-col gap-2 w-full "
    >
      <Label className="text-xl font-semibold">{header}</Label>
      <Button className="border px-5 py-3 rounded-lg flex justify-between outline-none">
        <SelectValue slot="" />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover className="w-[300px] relative bg-white border rounded-lg h-[300px] overflow-y-auto">
        <ListBox className="[&>*]:px-5 [&>*]:py-3 [&>*]:outline-none [&>*]:cursor-pointer hover:[&>*]:bg-[#EEE] focus:[&>*]:bg-[#EEE]">
          {listOfCountries.map((country, index) => (
            <ListBoxItem id={country} key={index}>
              {country}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
      <FieldError className="text-sm text-red-600">{errorMessge}</FieldError>
    </Select>
  );
}
