import React from "react";
import { useEffect } from "react";
import { tooltips } from "../../../../public/utils/tooltips";
import { tableheader } from "../../../../public/utils/tableheader";
import { select } from "../../../../public/utils/select";

import { Folders } from "@/app/content/folders/Folders";
import { Views } from "@/app/content/views/Views";
import { Filters } from "@/app/content/filters/Filters";
import { Table } from "@/app/content/tables/Table";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { GridObjectives } from "@/app/layouts/grids/GridObjectives";

export interface ManageBoardProps {}

export const ManageBoard = ({}: ManageBoardProps) => {
    useEffect(() => {
        tooltips();
        tableheader();
    }, []);
    return (
        <Layout sideBar="Manage">
            <AppContent showStepper={true} sections="separated" showSubnav={true}>
                <div id="mainTable" className="application-section gap-16px dataTableContainer">
                    <Views
                      addClass="pb-16px"
                      buttons={[
                        {
                            label: "Add task",
                            iconStartName: "plus-circle",
                            type: "primary",
                        },
                      ]}
                      options={[
                        {
                            value: "_default",
                            label: "Board",
                            icon: "board",
                            active: true,
                        },
                        {
                            value: "table",
                            label: "Table",
                            icon: "table",
                        },
                        
                    ]}
                    />
                    <GridObjectives milestones={[
                      {
                          label: "Before Starting",
                          locked: false,
                          number: 0,
                          objectives: [],
                      },
                      {
                          label: "1. Observation",
                          date: "Oct 12",
                          locked: true,
                          number: 5,
                          objectives: [
                              {
                                  name: "Initial observation points",
                                  tasks: 5,
                                  emoji: "👀",
                              },
                              {
                                  name: "Company visit",
                                  tasks: 2,
                                  emoji: "💼",
                                  date: "Oct 19",
                              },
                              {
                                  name: "Stakeholder map",
                                  tasks: 1,
                                  emoji: "🗺",
                              },
                              {
                                  name: "Interview guide",
                                  tasks: 1,
                                  emoji: "🎤",
                              },
                              {
                                  name: "Interview summaries",
                                  tasks: 3,
                                  emoji: "💬",
                              },
                          ],
                      },
                      {
                          label: "2. Definition of needs",
                          date: "Nov 2",
                          locked: true,
                          number: 7,
                          objectives: [
                              {
                                  name: "Personas",
                                  tasks: 3,
                                  emoji: "👥",
                              },
                              {
                                  name: "User journeys",
                                  tasks: 3,
                                  emoji: "👤",
                              },
                              {
                                  name: "Presentation of initial observations",
                                  tasks: 1,
                                  emoji: "💬",
                                  date: "Nov 9"
                              },
                              {
                                  name: "Analogies*",
                                  tasks: 1,
                                  emoji: "✌️",
                              },
                              {
                                  name: "Benchmark",
                                  tasks: 1,
                                  emoji: "🕶️",
                              },
                              {
                                  name: "Refined issues",
                                  tasks: 1,
                                  emoji: "🔍",
                              },
                              {
                                  name: "Presentation of Preliminary Design Review",
                                  tasks: 1,
                                  emoji: "🎨",
                                  date: "Nov 30",
                                  dueDate: "Dec 7",
                              },
                          ],
                      },
                      {
                          label: "3. Conception",
                          date: "Dec 14",
                          locked: true,
                          number: 4,
                          objectives: [
                              {
                                  name: "Idea Cards",
                                  tasks: 3,
                                  emoji: "📋",
                              },
                              {
                                  name: "Value Proposition",
                                  tasks: 3,
                                  emoji: "💎",
                              },
                              {
                                  name: "Use Case Scenario",
                                  tasks: 3,
                                  emoji: "🎞️",
                              },
                              {
                                  name: "MOSCOW Matrix",
                                  tasks: 3,
                                  emoji: "🇷🇺",
                              },
                          ],
                      },
                      {
                          label: "4. Prototyping",
                          date: "Dec 14",
                          locked: true,
                          number: 5,
                          objectives: [
                              {
                                  name: "Solution Choice",
                                  tasks: 12,
                                  emoji: "✅",
                              },
                              {
                                  name: "Lean Canvas",
                                  tasks: 1,
                                  emoji: "📑",
                              },
                              {
                                  name: "First Prototype",
                                  tasks: 2,
                                  emoji: "🚧",
                              },
                              {
                                  name: "Presentation of Initial Tests",
                                  tasks: 1,
                                  emoji: "🎤",
                                  date: "Dec 16",
                              },
                              {
                                  name: "Final Prototype",
                                  tasks: 1,
                                  emoji: "🎨",
                                  date: "Dec 16",
                              },
                          ],
                      },
                      {
                          label: "5. Launch",
                          date: "Dec 16",
                          locked: true,
                          number: 7,
                          objectives: [
                              {
                                  name: "Business model canvas*",
                                  tasks: 1,
                                  emoji: "📑",
                              },
                              {
                                  name: "Presentation canvas",
                                  tasks: 1,
                                  emoji: "🎤",
                              },
                              {
                                  name: "Launch roadmap",
                                  tasks: 1,
                                  emoji: "🗺️",
                              },
                              {
                                  name: "Communication strategy",
                                  tasks: 1,
                                  emoji: "👋",
                              },
                              {
                                  name: "Corporate presentation",
                                  tasks: 3,
                                  emoji: "💼",
                                  date: "Dec 21",
                              },
                              {
                                  name: "Demo Day",
                                  tasks: 3,
                                  emoji: "🎤",
                                  date: "Dec 28",
                              },
                              {
                                  name: "Virtual Fair 2025",
                                  tasks: 6,
                                  emoji: "💻",
                              },
                          ],
                      },
                      {
                          label: "AfterWords",
                          date: "Dec 24",
                          locked: true,
                          number: 0,
                          objectives: [],
                      },
                  ]} />
                </div>
            </AppContent>
        </Layout>
    );
};
