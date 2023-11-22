"use client";

import { updateBoard } from "@/actions/update-board";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { Board } from "@prisma/client";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title}" updated!`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    // TODO: focus input
    setIsEditing(true);
  };

  const disableEditing = () => {
    setIsEditing(false);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select;
    });
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title, id: data.id });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        className="flex items-center gap-x-2"
        ref={formRef}
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="bg-transparentF h-7 border-none bg-transparent px-[7px] py-1 text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant={"transparent"}
      className="h-auto w-auto p-1 px-2 text-lg font-bold"
    >
      {data.title}
    </Button>
  );
};
