import { NextResponse } from "next/server";

// POST /api/create-chat
export async function POST(req: Request, res: Response){
    try {
        const body = await req.json();
        const {file_key, file_name} = body;
        console.log('route.ts -> POST -> file_key, file_name', file_key, file_name);
        return NextResponse.json({message: "success"});
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {error: "internal server error"},
            {status: 500}
        );
    }
}