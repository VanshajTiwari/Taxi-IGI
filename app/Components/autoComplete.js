"use client";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
export default function AutoComeplete() {
    const animals=[];
  return (
    <div className="flex w-full">
      <div className="dropdown-field">
							<select>
              {
                animals.map((e)=><option>e</option>)
              }
                <option>None</option>
							</select>
							<CaretDown/>
						</div>
    </div>
  );
}
