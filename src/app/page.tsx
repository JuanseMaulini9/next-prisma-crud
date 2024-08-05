import prisma from "@/lib/prisma";
import TaskCard from "@/components/task-card";

async function Home() {
  const task = await prisma.task.findMany();
  console.log(task);

  return (
    <div className="grid grid-cols-3 gap-4">
      {task.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </div>
  );
}

export default Home;
