import React from "react";
import Card from "../ui/Card";
import UpdateUserPasswordForm from "../ui/UpdateUserPasswordForm";
import UpdateUserForm from "../ui/UpdateUserForm";

function Account() {
  return (
    <div className="mt-4 flex max-w-4xl mx-auto gap-6">
      <Card className="w-[632px]">
        <div className="flex gap-5 flex-col">
          <span className="text-xl">Account Settings</span>
          <UpdateUserForm />
        </div>
        <UpdateUserPasswordForm />
      </Card>
    </div>
  );
}

export default Account;
