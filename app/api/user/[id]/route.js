import { NextResponse } from "next/server";
import users from "../../../util/db";

export async function GET(request, content) {
  let result = content.params.id;
  const userdata = users.filter((item) => item.id === result);
  return NextResponse.json(
    userdata.length == 0
      ? { result: "No Data found", sucess: false }
      : { result: userdata[0] ,sucess: true}
  );
}
