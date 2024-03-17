"use client";

import { ModeToggle } from "@/components/mode-toggle";
import React, { useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { encode as base64_encode, decode } from "base-64";
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
import { Button } from "@/components/ui/button";
import { Play, UploadCloud } from "lucide-react";
import axios from "axios";
import { UserButton, useClerk } from "@clerk/nextjs";

const testcases = {
  testcases: [
    {
      id: 1,
      input: "abaaab",
      output: "1",
      answer: "",
    },
    {
      id: 2,
      input: "abaabababab",
      output: "1",
    },
    {
      id: 3,
      input: "ababbbabbababa",
      output: "3",
    },
  ],
};

const InterviewPage = () => {
  const clerk = useClerk();
  const [code, setCode] = useState("");
  const [executionCode, setExecutionCode] = useState(0);
  const [stdout, setStdout] = useState(testcases["testcases"]);
  function handleEditorChange(value: any, event: any) {
    console.log(base64_encode(value));
    setCode(value);
    // console.log(decode("NQo="));
    // console.log(code);
  }

  const handleRun = async () => {
    const base64Code = base64_encode(code);
    console.log(code);

    testcases["testcases"].map(async (tcs, key = tcs.id) => {
      const options = {
        method: "POST",
        url: "https://judge0-ce.p.rapidapi.com/submissions",
        params: {
          base64_encoded: "true",
          wait: "true",
        },
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "a153a9a044mshceeb2d2e39060a2p151ab3jsn4eb3661acc00",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        data: {
          language_id: 52,
          source_code: base64Code,
          stdin: base64_encode(tcs.input),
          expected_output: base64_encode(tcs.output),
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setExecutionCode(response.data.status.id);
        let tscs = testcases["testcases"];
        tscs.map((tcs2) => {
          if (tcs.id == tcs2.id) {
            tcs2.answer = decode(response.data.stdout);
          }
        });
        setStdout(tscs);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const handleSubmit = () => {};

  return (
    <div className="flex flex-row bg-gray-200 text-gray-600 dark:bg-zinc-800 dark:text-zinc-300">
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
            {clerk.loaded && (
              <Editor
                height="63vh"
                defaultLanguage="cpp"
                defaultValue="// some comment"
                theme="vs-dark"
                className="pt-1"
                onChange={handleEditorChange}
              />
            )}
          </div>
          <div className="basis-1/2">
            testcase
            <div className="dark:bg-zinc-900 dark:text-zinc-300 rounded-md p-2">
              <Tabs className="">
                <TabsList className="w-full justify-between">
                  <div>
                    {testcases["testcases"].map((tcs) => {
                      return (
                        <TabsTrigger value={tcs.id.toString()} key={tcs.id}>
                          Testcase {tcs.id}
                        </TabsTrigger>
                      );
                    })}
                  </div>
                  <div>
                    <Button onClick={handleRun}>
                      {" "}
                      <Play></Play> Run
                    </Button>
                    <Button onClick={handleSubmit}>
                      <UploadCloud></UploadCloud> Submit
                    </Button>
                  </div>
                </TabsList>
                {testcases["testcases"].map((tcs) => {
                  return (
                    <TabsContent value={tcs.id.toString()} key={tcs.id}>
                      <span className="font-size:18px">
                        <strong>Input:</strong> str = "{tcs.input}"<br></br>
                        <strong>Expected Output:</strong> {tcs.output}
                        <br></br>
                        {executionCode == 3 ? (
                          <>
                            <strong>Output: </strong>
                            {tcs.answer}
                            {console.log(tcs.answer)}
                          </>
                        ) : (
                          <></>
                        )}
                      </span>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
