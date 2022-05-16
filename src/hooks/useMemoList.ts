import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);
  const addTodo = useCallback((text: string) => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    console.log(`onClickAdd: ${newMemos}`);
  }, [memos])

  const deleteTodo = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    console.log(`onClickDelete: ${newMemos}`);
  }, [memos])

  return { memos, addTodo, deleteTodo}
}
