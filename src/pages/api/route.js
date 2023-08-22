import { NextResponse } from "next/server";

export function DELETE(request,content){
let id = content.params.id;
if(id){
    return NextResponse.json({result:"user deleted", success:true}, {status:"200"})
}else{
    return NextResponse.json({result:"user error", success:false}, {status:"202"})

}
}