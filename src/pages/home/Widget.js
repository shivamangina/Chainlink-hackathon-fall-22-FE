import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    id: 1,
    name: "Transactions",
    stat: "71,897",
    icon: BanknotesIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Total Campaigns",
    stat: "5",
    icon: EnvelopeOpenIcon,
    change: "10%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "No of Users Donated",
    stat: "2457",
    icon: CursorArrowRaysIcon,
    change: "3%",
    changeType: "decrease",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Widget = () => {
  return (
    <div>
      <dl className="m-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-2 sm:pb-3">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Widget;
