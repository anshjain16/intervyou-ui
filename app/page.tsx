"use client";

import { ModeToggle } from "@/components/mode-toggle";
import React from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InterviewPage = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-200 text-gray-600 dark:bg-zinc-800 dark:text-zinc-300">
      <div className="flex flex-col basis-1/2">
        <div className="flex-auto basis-1/2">
          Question <ModeToggle></ModeToggle>
          <Card className="dark:bg-zinc-900 dark:text-zinc-300 font-mono text-gray-700">
            <CardHeader>
              <CardTitle>Pallindrome Partitioning</CardTitle>
              <CardDescription>Easy for you ;{")"}</CardDescription>
            </CardHeader>
            <CardContent className="font-mono">
              <ScrollArea className="rounded-md p-2 h-21 w-full">
                <p className="font-thin">
                  Given a string <strong>str</strong>, a partitioning of the
                  string is a palindrome partitioning if every sub-string of the
                  partition is a palindrome. Determine the fewest cuts needed
                  for palindrome partitioning of the given string.
                </p>
                {""}
              </ScrollArea>
            </CardContent>
            <CardFooter className="text-gray-500">
              1 ≤ length of str ≤ 500
            </CardFooter>
          </Card>
        </div>
        <div className="flex-auto basis-1/3">assistant</div>
      </div>
      {/* <Separator orientation="vertical"></Separator> */}
      <div className="basis-1/2 h-full">
        <div className="flex flex-col h-full">
          <div className="basis-2/3">
            Code
            <Editor
              height="63vh"
              defaultLanguage="cpp"
              defaultValue="// some comment"
              theme="vs-dark"
              className="pt-1"
              loading
            />
          </div>
          <div className="basis-1/2">
            testcase
            <div className="dark:bg-zinc-900 dark:text-zinc-300 rounded-md p-2">
              <Tabs>
                <TabsList>
                  <TabsTrigger value="testcase1">Testcase 1</TabsTrigger>
                  <TabsTrigger value="testcase2">Testcase 2</TabsTrigger>
                </TabsList>
                <TabsContent value="testcase1">
                  <span className="font-size:18px">
                    <strong>Input:</strong> str = "aaabba"
                    <br></br>
                    <strong>Output:</strong> 1
                    <strong>
                      <br></br>
                      Explaination:
                    </strong>{" "}
                    The substrings after 1 partitioning are "aa" and "abba".
                  </span>
                </TabsContent>
                <TabsContent value="testcase2">
                  <span className="font-size:18px">
                    <strong>Input:</strong> str = "ababbbabbababa"
                    <br></br>
                    <strong>Output:</strong> 3
                    <strong>
                      <br></br>
                      Explaination:
                    </strong>{" "}
                    After 3 partitioning substrings are "a", "babbbab", "b",
                    "ababa".
                  </span>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
