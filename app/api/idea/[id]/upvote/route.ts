import { auth } from "@/auth";
import { dbConnect } from "@/lib/db";
import { Idea } from "@/models/Idea";
import { User } from "@/models/User";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const ideaId = params.id;

    const session = await auth();
    const userId = session?.user?.id;
    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ message: "User doesn't exist" }, { status: 401 });
    }

    const idea = await Idea.findById(ideaId);
    if (!idea) {
      return Response.json({ message: "Idea not found" }, { status: 404 });
    }

    if (idea.upvotes.includes(userId)) {
      idea.upvotes.pull(userId);
    } else {
      idea.upvotes.push(userId);
      idea.downvotes.pull(userId);
    }

    await idea.save();

    return Response.json(idea, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error upvoting Idea" }, { status: 500 });
  }
}
