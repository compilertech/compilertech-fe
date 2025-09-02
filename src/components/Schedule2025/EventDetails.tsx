import React, { useState } from "react";
import styled from "styled-components";
import ClockIcon from "../../assets/common/ClockIcon.svg";
import TeaCupIconSrc from "../../assets/common/TeaCupIcon.svg";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";
import EventDetailModal from "./EventDetailModal";

type DayTab = { title: string; id: number; date: string };
type ScheduleItem = {
  id: string;
  time?: string;
  event?: string;
  icon?: string;
  activity?: string;
  buttonText?: string;
  highlightedHeading?: string;
  speakers?: string;
  teaser?: string;
  abstract?: string;
};

const dayTabs: DayTab[] = [
  { title: "Day 1", id: 1, date: "27th September 2025" },
  { title: "Day 2", id: 2, date: "28th September 2025" },
];

export default function EventDetails() {
  const [selectedDay, setSelectedDay] = useState<DayTab>(dayTabs[0]);
  const [selectedEvent, setSelectedEvent] = useState<ScheduleItem | null>(null);

  const scheduleItems: { [key: number]: ScheduleItem[] } = {
    1: [
      {
        id: "1_1",
        time: "09:15 - 09:30",
        event: "Welcome",
        icon: ClockIcon,
        activity: "Inaguration",
      },
      {
        id: "1_2",
        time: "09:30 - 10:15",
        buttonText: "Invited Talks",
        highlightedHeading: "TBD",
        speakers: "NVIDIA",
        icon: ClockIcon,
        activity: "Keynote talk",
      },
      {
        id: "1_3",
        time: "10:15 - 10:35",
        icon: ClockIcon,
        highlightedHeading:
          "Experiences in Engineering The Eclipse Compiler for Java",
        speakers: "Manoj Nalledathu Palat, Jayaprakash Arthanareeswaran",
        teaser: "https://youtu.be/969_Wuz5dkI",
        activity: "Contributed talks",
        abstract: `
          In this paper, we share the experience in engineering the Eclipse Java Compiler across Java releases. This proposal is more about sharing the experience of working in the compiler for the last decade or so rather than a focused discussion on a particular issue.

          \nFirst part starts with problems encountered in the compiler pipeline starting with the grammar especially with the usage of context-sensitive restricted identifiers becoming widespread. Some of the statements changed to expressions causing non-trivial implementations changes which the paper covers next. First part concludes with a discussion on compiler generated synthetic code and associated challenges.

          \nIn the second part, paper talks about the challenges in providing a good user experience. Starts with general issues of preview features, a concept introduced in Java for feedback mechanism. The paper then talks about some of the integration challenges from the point of upline consumers.

          \nPaper concludes with a list of few possible future works including replacing “jikespg”[1] with a modern parser, code-gen optimizations, paths for easy migration, or even the possibility of new program analysis tools.`,
      },
      {
        id: "1_4",
        time: "10:35 - 10:55",
        icon: ClockIcon,
        highlightedHeading: "Optimized GHASH Intrinsics for OpenJDK on PowerPC",
        speakers: "Suchismith Roy and Saurov Kanti Shyam",
        teaser:
          "https://drive.google.com/file/d/1ubIyzhcf3qqCWabG3v1JqsY3taDHtgpB/view?usp=sharing",
        activity: "Contributed talks",
        abstract: `The Galois/Counter Mode (GCM) is widely adopted for authenticated encryption in modern security protocols. A performance-critical component of GCM is the GHASH function, which requires efficient polynomial multiplication over the binary field GF(2¹²⁸). This paper presents the design, implementation, and evaluation of a high-performance GHASH intrinsic for the PowerPC (PPC) architecture, integrated into the HotSpot Java Virtual Machine (JVM) within the OpenJDK. By leveraging PPC’s Vector-Scalar Extension (VSX) and vectorized polynomial multiplication instructions (vpmsumd), our implementation significantly outperforms traditional scalar approaches, achieving competitive performance with GHASH intrinsics on x86 and AArch64 platforms.`,
      },
      {
        id: "1_5",
        time: "10:55 - 11:30",
        event: "Tea Break",
        icon: TeaCupIconSrc,
      },
      {
        id: "1_6",
        time: "11:30 - 11:50",
        highlightedHeading: "eld -- Embedded Linker. Why another linker?",
        speakers: "Parth Arora, Shankar Kalpathi Easwaran and Rishabh Bali",
        icon: ClockIcon,
        teaser:
          "https://drive.google.com/file/d/1bFROomtjgovQdPMmGF5fntU4BbG3DyaA/view?usp=drivesdk",
        activity: "Contributed talks",
        abstract: `
          This talk introduces eld, a linker designed to meet the needs of embedded systems development. While traditional linkers such as GNU ld and LLVM lld perform well on general-purpose platforms like x86-64, they often fall short in embedded environments where performance constraints, precise memory layout control, and detailed diagnostics are critical.
          \nEmbedded platforms require a different set of priorities -- tight memory footprints, deterministic behavior, and deep visibility into the linking process. eld addresses these challenges with a feature set tailored for embedded development, including:

          \n- A faster and more resource-efficient GNU-compatible linker
          \n- Rich diagnostics and detailed map-files
          \n- Linker plugin framework that enables developers to customize the link.
          \n- A modular target architecture that makes it easy to extend eld to new targets.

          \n\nThis talk will explore the philosophy and design goals of eld, highlight its key capabilities, and present a comparative analysis with other major open-source linkers.`,
      },
      {
        id: "1_7",
        time: "11:50 - 12:10",
        icon: ClockIcon,
        highlightedHeading: "Customizing link using plugins",
        speakers: "Parth Arora, Shankar Kalpathi Easwaran and Rishabh Bali",
        activity: "Contributed talks",
        teaser:
          "https://drive.google.com/file/d/1pdLk_wJy_O_J9EYIeOL5CJEPkjbpZwU0/view?usp=drivesdk",
        abstract: ` Modern build systems increasingly demand precise control over the linking process to support specialized use cases in performance, memory layout, and diagnostics. ELD (Embedded Linker) introduces a powerful and flexible plugin framework that enables developers to customize the linking pipeline -- without modifying the linker itself.
          \nThe ELD plugin framework provides deep visibility and control over every stage of the linking process, including symbols, sections, relocations, input files, rule-matching, diagnostics, layout, Link Time Optimization (LTO), garbage collection, and more. ELD plugins empower developers to implement highly tailored linking strategies aligned with their system’s architecture, performance goals, or security constraints.

          \n\nThis tutorial talk will introduce the ELD plugin frameworkand demonstrate its practical utility through twoillustrative examples:

          \n- SymbolChecker: A linker plugin that inspects symbols during linking and emits diagnostics for problematic or error-prone symbols.
          \n- LayoutOptimizer: A linker plugin that improves the image layout by reordering sections and applying memory budgeting techniques to enhance performance and memory efficiency.`,
      },
      {
        id: "1_8",
        time: "12:10 - 12:30",
        icon: ClockIcon,
        highlightedHeading:
          "Enhanced debuggability support in the LLVM-based AOCC compiler for various Fortran language features",
        speakers:
          "Alok Kumar Sharma, Jini Susan George and Bhuvanendra Kumar N",
        teaser:
          "https://archive.fosdem.org/2022/schedule/event/llvm_fortran_debug/",
        activity: "Contributed talks",
        abstract: `In the world of high-performance computing, the FORTRAN (standing for FORmula TRANslator) language still stands tall after decades, thanks to its strong support for parallel computing and its ability to efficiently handle complex mathematical calculations and numerical operations. The powerful array and modular programming features of the language make it extremely suitable for computationally intensive fields like numerical weather prediction, finite element analysis, computational fluid dynamics, geophysics, computational physics, crystallography, and computational chemistry. But these very same features can pose a challenge when it comes to debugging applications with these features and can create a stumbling block in the adaptability of this language, in turn, reducing AMD's chances of being a pioneer in the HPC world.
              \nOur paper details out the challenges to provide debuggability support for a plethora of complex Fortran features (like various types of Arrays, Strings, Modules and Namelists etc) in the LLVM based AOCC Fortran compiler (Flang) and our novel solutions for addressing those. These solutions include enhancements done in (a)AOCC Flang (compiler front-end) to produce the apt LLVM IR (Intermediate Representation) (b)LLVM (compiler backend) to process these modified IR to generate feature-rich DWARF debug information (c)GDB (The GNU Debugger) to consume this DWARF information and help users to have a seamless debugging experience.
              \nNOTE: This paper is presented at the FOSDEM (Free and Open Source Software Developers' European Meeting) conference. please find the link: https://archive.fosdem.org/2022/schedule/event/llvm_fortran_debug/`,
      },
      {
        id: "1_9",
        time: "12:30 - 12:50",
        icon: ClockIcon,
        highlightedHeading:
          "Open-source compiler for vendor-specific RISC-V extensions",
        speakers:
          "Pankaj Gode, Sudharsan Veeravalli, Harsh Chandel, Samuel Elliott and Ana Pazos",
        teaser:
          "https://drive.google.com/file/d/1i5OK6Z_UGMWuUTGZHOyv7Q010eiYxVUM/view?usp=sharing",
        activity: "Contributed talks",
        abstract:
          "Proprietary Instruction Set Architectures (ISAs) pose significant challenges for compiler development, including limited optimization potential, increased engineering overhead, and lack of community feedback. This paper presents a methodology for transitioning from a proprietary ISA to a custom RISC-V ISA, leveraging both standard RISC-V extensions and vendor-specific enhancements—namely, XQCI and XQCCMP—to improve code density and performance in microcontroller-class devices. We detail compiler modifications required to support these custom extensions. The XQCI extension introduces specialized instructions such as conditional branches, moves, selects, 48-bit instructions with extended immediates, and multi-load/store operations, which are particularly effective in optimizing control-intensive code and reducing code footprint. Additionally, enhancements to prologue/epilogue generation using XQCCMP instructions enable efficient stack management and argument handling, resulting in per-function improvements in both size and performance. The paper also outlines changes to the assembler, code generation, and linker relaxations necessary to support this custom RISC-V ISA. Finally, we emphasize the role of RISC-V ecosystem tools, such as QEMU, in validating compiler correctness during ISA transitions.",
      },
      {
        id: "1_10",
        time: "12:50 - 14:00",
        event: "Lunch Break",
        icon: TeaCupIconSrc,
      },
      {
        id: "1_11",
        time: "14:00 - 14:45",
        buttonText: "Invited Talks",
        highlightedHeading: "TBD",
        speakers: "KC Sivaramakrishnan",
        icon: ClockIcon,
        activity: "Keynote",
      },
      {
        id: "1_12",
        time: "14:45 - 15:05",
        icon: ClockIcon,
        highlightedHeading:
          "Meerkat: A Framework for Dynamic Graph Algorithms on GPUs",
        speakers:
          "Kevin Jude Concessao, Unnikrishnan Cheramangalath, Ricky Dev and Rupesh Nasre",
        teaser:
          "https://drive.google.com/file/d/1KIet4e4cGqMHg2bd6uo3KvEN7LsBSsa9/view?usp=sharing",
        activity: "Contributed talks",
        abstract: `Graph algorithms are challenging to implement due to their varying topology and irregular access patterns. Real-world graphs are dynamic in nature and routinely undergo edge and vertex additions, as well as, deletions. Typical examples of dynamic graphs are social networks, collaboration networks, and road networks. Applying static algorithms repeatedly on dynamic graphs is inefficient. Further, due to the rapid growth of unstructured and semi-structured data, graph algorithms demand efficient parallel processing. Unfortunately, we know only a little about how to efficiently process dynamic graphs on massively parallel architectures such as GPUs. Existing approaches to represent and process dynamic graphs are either not general or are inefficient. In this work, we propose a graph library for dynamic graph algorithms over a GPU-tailored graph representation and exploits the warp-cooperative work-sharing (WCWS) execution model, which makes use of intra-warp instrinsics, avoids warp divergence, and enables coalesced access of the neighbours of a vertex. Based on the warp-cooperative work-sharing strategy, our library, named Meerkat, builds upon a recently proposed dynamic graph representation on GPUs, and enables fast iteration through a group of vertices, a pattern that is crucial for achieving performance in graph applications. We have implemented dynamic versions of popular graph algorithms such as breadth-first search, single-source shortest paths, triangle counting, PageRank, and weakly connected components, and evaluated them over the ones in other publicly available dynamic graph data structures and frameworks: GPMA, Hornet, and faimGraph. Using a variety of real-world graphs, we observe that Meerkat significantly improves the efficiency of the underlying dynamic graph algorithm, outperforming these frameworks.
            \nFull Paper: https://link.springer.com/article/10.1007/s10766-024-00774-z`,
      },
      {
        id: "1_13",
        time: "15:05 - 15:25",
        icon: ClockIcon,
        highlightedHeading: "MeePyDRA - Pythonic DSL for RAN",
        speakers:
          "R Eshwar, Rohit Garg, Nikhil Hegde, Makarand G Kulkarni, Samarth Chitnis and Gurjaipal Singh",
        teaser:
          "https://drive.google.com/file/d/16niTRzUOm6ZMNJXVRgGzsZFodcyHf497/view?usp=sharing",
        activity: "Contributed talks",
        abstract: `Radio Access Network (RAN) software often needs to be developed and maintained for multiple hardware platforms. The initial algorithmic model, called waveform, is developed in MATLAB or Python and once the functional correctness is established, efficient 'C' versions are developed and deployed on the target hardware. This process incurs huge costs, the software is difficult to maintain and dependent on the lifecycle of the target hardware platform, and is not a scalable approach when deployment on a number of target platforms is needed. In this work, we propose PyDRA, a framework that allows for Python-based waveform definition in RAN, without any restrictions on the language such as programmer specified annotations for targeting specific hardware units. We translate the input PyDRA program to MLIR and through a sequence of lowerings, produce llvm bitcode. We then execute the bitcode on the x86 platform and propose to execute on multiple targets through 'offloading' from the x86-based host. We use ANTLR4 to generate a parser for Python3.8, add "listener" methods to traverse the parse tree, and while traversing emit MLIR. We use MLIR builder APIs and also hand code to emit IR. mlir-translate, llvm's compiler llc, and a number of libraries are used to produce a target. Evaluation of a 4096-point fft program written in Numpy, C, and PyDRA translated Numpy, show that the performance of PyDRA translated code is 2x faster than the Numpy program.`,
      },
      {
        id: "1_14",
        time: "15:25 - 16:00",
        event: "Tea Break",
        icon: TeaCupIconSrc,
      },
      {
        id: "1_15",
        time: "1:00 - 16:20",
        icon: ClockIcon,
        highlightedHeading: "Declarative IR Specification in Pliron",
        speakers: "Vaivaswatha Nagaraj",
        teaser: "https://youtu.be/HS4l8qxLELE",
        activity: "Contributed talks",
        abstract: `Extensible compiler IR frameworks, such as pliron or MLIR allow compiler writers to extend the IR by enabling definitions of new IR entities such operations, types etc. It is common for these definitions to contain boilerplate code and verbose syntax (printer and parser) definitions.
            \nWhile MLIR employs the TableGen language and tool to specify these definitions in a declarative manner, pliron takes advantage of Rust's powerful procedural macros to serve the same end goal: declarative specification of IR entities.
            \nThis talk, beginning with a brief introduction to the problem space, proceeds to demonstrate, mostly with examples, the power and utility of a Rust macros based`,
      },
      {
        id: "1_16",
        time: "16:20 - 16:30",
        icon: ClockIcon,
        highlightedHeading:
          "Compiling Distributed Consistency: Thoughts on Designing an Initial Compiler for Orthogonally Replicated Data Types",
        speakers: "Rupashree Rangaiyengar",
        teaser: "https://www.youtube.com/watch?v=4Jz1Bj8O5gI",
        activity: "Contributed talks",
        abstract:
          "In this talk I wish to present an MLIR-based dialect for Orthogonally Replicated Datatypes (the foundational programming abstraction for a new programming language called Gambit that I am building) that transforms restriction semantics and merge functions into verifiable mathematical constraints. Through a multi-stage lowering pipeline—from high-level ORDT operations, through lattice-theoretic foundations, down to optimized runtime code—the dialect verifies the operation commutativity, merge, and invariant compliance. This dialect aims to establish a paradigm where consistency guarantees are proven at compile time rather than hoped for at runtime—laying the foundation for compiler-assisted distributed programming.",
      },
      {
        id: "1_17",
        time: "16:30 - 16:50",
        icon: ClockIcon,
        highlightedHeading:
          "GSOHC: Global Synchronization Optimization in Heterogeneous Computing",
        speakers: "Soumik Kumar Basu and Jyothi Vedurada",
        teaser:
          "https://drive.google.com/file/d/1ixznJe-SwJHgyiNFyCBoZLssFTtNbCYx/view?usp=sharing",
        activity: "Contributed talks",
        abstract:
          "The use of heterogeneous systems has become widespread and popular in the past decade, with more than one type of processor, such as CPUs, GPUs (Graphics Processing Units), and FPGAs (Field Programmable Gate Arrays), etc. A wide range of applications use both CPU and GPU to leverage the benefits of their unique features and strengths. Therefore, collaborative computation between CPU and GPU is essential to achieve high program performance. However, poorly placed global synchronization barriers and synchronous memory transfers are the main bottlenecks to enhanced program performance, preventing CPU and GPU computations from overlapping. Based on this observation, we propose a new optimization technique called hetero-sync motion that can relocate such barrier instructions to new locations, resulting in improved performance in CPU-GPU heterogeneous programs. Further, we propose GSOHC, a compiler analysis and optimization framework that automatically finds opportunities for hetero-sync motion in the input program and then performs code transformation to apply the optimization. Our static analysis is a context-sensitive, flow-sensitive inter-procedural data-flow analysis with three phases to identify the optimization opportunities precisely. We have implemented GSOHC using LLVM/Clang infrastructure. On A4000, P100 and A100 GPUs, our optimization achieves speedups of up to 1.8x, 1.9x and 1.9x over the baseline, respectively.",
      },
      {
        id: "1_18",
        time: "16:50 - 17:10",
        icon: ClockIcon,
        highlightedHeading: "Enhance LLVM Loop Vectorization Using Polly",
        speakers: "Karthika Devi C",
        teaser:
          "https://drive.google.com/file/d/1_rRBysBOdGVn1yteheE_nS9M5lPB1nBi/view?usp=sharing",
        activity: "Contributed talks",
        abstract:
          "Vectorization is a key compiler optimization that transforms scalar loop operations into vector operations, enabling efficient utilization of SIMD hardware and boosting performance. LLVM’s Loop Vectorizer (LV) is a mature middle-end pass that performs target-agnostic vectorization using a cost model, capable of handling a wide range of loop constructs. However, LV is limited when dealing with complex loop dependencies and memory access patterns. Polly, a high-level loop optimizer based on the polyhedral model, complements LV by analyzing and transforming complex loop nests. It can uncover hidden parallelism, optimize data locality through transformations like tiling and fusion, and identify vectorization opportunities that LV might miss. However, it no longer supports generating vectorized code. This work presents a collaborative approach where Polly annotates loops with metadata to guide LV in generating optimized vector code. This integration improves loop coverage and vectorization quality. The infrastructure is controlled via the polly-annotate-metadata-vectorize flag. Future improvements include passing additional metadata such as optimal vector factors and unroll preferences, refining debug information, and enhancing Polly’s front-end to better detect vectorization opportunities.",
      },
    ],
    2: [
      {
        id: "2_1",
        time: "09:30 - 10:15",
        highlightedHeading: "TBD",
        speakers: "Sorav Bansal",
        buttonText: "Invited Talks",
        icon: ClockIcon,
        activity: "Kenote talk",
      },
      {
        id: "2_2",
        time: "10:15 - 10:35",
        icon: ClockIcon,
        highlightedHeading:
          "A Formal Verification Approach to Safeguard Controller Variables from Single Event Upset",
        speakers: "Ganesha and Sujit Kumar Chakrabarti",
        teaser:
          "https://drive.google.com/file/d/1xKVyyRVTGFaTQlHXf4ziP1MXChCEPxbK/view?usp=sharing",
        activity: "Contributed talks",
        abstract:
          "We present a method based on program analysis and formal verification to identify conditionally relevant variables (CRVs) – variables which could lead to violation of safety properties in control software when affected by single event upsets (SEUs). Traditional static analysis can distinguish between relevant and irrelevant variables. However, it would fail to take into account the conditions specific to the control software in question. This can lead to false positives. Our algorithm employs formal verification to avoid false positives. We have conducted experiments that demonstrate that CRVs indeed are fewer in number than what traditional static analysis can detect and that our algorithm is able to identify this fact. The information provided by our algorithm could prove helpful to a compiler while it does register allocation during the compilation of the control software. In turn, this could cause significant reduction in the cost of controller chips.",
      },
      {
        id: "2_3",
        time: "10:35 - 10:55",
        icon: ClockIcon,
        highlightedHeading: "Inductor-TV: Formal Methods for Pytorch Compiler",
        speakers: "Abhilash Majumder",
        teaser:
          "https://drive.google.com/file/d/1e6I856JKTvheTxsAduuVwbFuXxHABEv_/view?usp=sharing",
        activity: "Contributed talks",
        abstract: `
          Overview
          \nPyTorch 2.0 revolutionized neural network compilation through its innovative compiler backend architecture, combining Dynamo and Inductor backends over the existing FX Graph compilation framework. While Dynamo provides device-agnostic JIT compilation capabilities for various accelerators, Inductor specializes in optimizing GEMM inference through advanced tiling, primitive fusion, and hardware-aware data layout reordering.

          \n\nThe Challenge
          \nDespite its performance benefits, the PyTorch Inductor backend suffers from reliability issues inherent to its rapid development cycle, including undefined behavior (UB), erroneous behavior (EB), out-of-bounds accesses (OOBs), and nullptr exceptions. These issues are exacerbated by Inductor's heterogeneous backend architecture, which generates C++/OpenMP code for CPU execution and Triton runtime (PTX) for NVIDIA CUDA accelerators.

          \n\nProposed Solution
          \nThis work presents a novel formal verification framework inspired by Alive2's SMT-based approach, specifically designed to validate PyTorch Inductor's custom intermediate representation. The framework addresses the critical need for robustness in production compiler backends by providing:

          \n\n1. Fine-grained transformation validation - Verifying correctness of individual optimization passes within the Inductor pipeline
          \n2. Multi-backend formal verification - Handling both CPU (C++/OpenMP) LLVM and GPU (Triton/PTX) NVVM code generation paths to generate stabilized Alive2 IR.
          \n3. Program synthesis - Anatomically splicing optimized IR to inject target specific optimizations and generating superoptimized kernels which can be reconstructed to PTX to be fed into the Inductor for performance benchmarking and robustness.

          \n\nTechnical Approach
          \nThe verification framework leverages SMT solvers (Z3) to formally prove equivalence between original FX graph, Inductor-compiled counterparts and LLVM/NVVM IR guardrails. This enables detection of compiler bugs, optimization errors, and hardware-specific translation issues before deployment, ensuring the reliability of PyTorch 2.0's aggressive compilation optimizations.

          \nImpact
          \nBy integrating formal verification directly into the PyTorch compilation pipeline, this work provides a foundation for trustworthy AI model deployment, particularly critical for safety-critical applications where compiler correctness cannot be assumed.

          \n\nOnline copy of pdf: https://drive.google.com/file/d/1ALMmYSSJM2srCnxFZoxxp_wvoATsqo5i/view?usp=sharing`,
      },
      {
        id: "2_4",
        time: "10:55 - 11:30",
        icon: TeaCupIconSrc,
        event: "Tea Break",
      },
      {
        id: "2_5",
        time: "11:30 - 11:50",
        icon: ClockIcon,
        highlightedHeading:
          "Combining Static Analysis and Speculations in JIT Compilers",
        speakers: "Aditya Anand",
        teaser:
          "https://drive.google.com/file/d/1zvF4qspeoHlRyO38xs2xlkS3g-WRACrk/view?usp=share_link",
        activity: "Contributed talks",
        abstract:
          "Just-in-time (JIT) compilers typically sacrifice the precision of program analysis for efficiency, but are capable of performing sophisticated speculative optimizations based on run-time profiles to generate code that is specialized to a given execution. On the contrary, ahead-of-time static compilers can often afford precise flow-sensitive interprocedural analysis, but produce conservative results in scenarios where higher precision could be derived from run-time specialization. In this paper, we propose the first-of-its-kind approach to enrich static analysis with the possibility of speculative optimization during JIT compilation, as well as its usage to perform aggressive stack allocation on a production Java Virtual Machine (JVM).",
      },
      {
        id: "2_6",
        time: "11:50 - 12:10",
        highlightedHeading: "What does an IR for JS static analysis look like?",
        speakers: "Meetesh Kalpesh Mehta",
        icon: ClockIcon,
        teaser:
          "https://drive.google.com/file/d/136PJl_VW7EXHbkaJT-bJPCsegpkP88sh/view?usp=share_link",
        activity: "Contributed talks",
        abstract: `
          JavaScript is no doubt an interesting language. It powers websites, servers, mobile and desktop applications, and more.
          \nThe widespread adoption of the language is not a fluke—it is, by design, a highly extensible language. Over the years, the language has been extended and adapted to fit many paradigms, such as JSX extensions for UI design and the async/await syntax, which allows for easy-to-read abstractions over asynchronous computation. New syntax often abstracts away complex semantics, making the task of performing analysis difficult. An intermediate language serves as a platform to reduce this abstraction cost by exposing hidden semantics, implicit transformations, and abstract operations of the system.

          \n\nA lot of code written in dynamic languages tends to look, work, and feel very similar. It is natural in these languages to ignore the technicalities of strict typing and instead reason at a higher level—like orchestrating callbacks that are dynamically loaded or switched at runtime. To support such reasoning, we need analysis tools that understand these high-level primitives. Our aim is straightforward: develop an expressive intermediate representation (IR) for JavaScript that can model the full language—and, in doing so, uncover a functional core that can serve as a shared foundation for analyzing many such languages.

          \n\nOur pipeline currently has three stages: (i) JavaScript source to 3JS (a three-address-like subset of JavaScript), (ii) 3JS to Iridium (our core IR), and (iii) a fork of the QuickJS virtual machine with added support for Iridium. Last year at IICT, we spoke about the challenges of reducing JavaScript into a three-address-code representation, and why in some cases this reduction isn’t achievable without violating language semantics. Since then, we have been steadily building our static analysis intermediate language, Iridium. This talk will share our thoughts and experiences on designing such a language, the implementation techniques involved, and the ongoing tug-of-war between abstracting logic and managing verbosity.
        `,
      },
      {
        id: "2_7",
        time: "12:10 - 12:30",
        icon: ClockIcon,
        highlightedHeading: "VASCO for Bidirectional Analysis",
        speakers: "Swati Jaiswal, Aditi Raste and Uday Khedker",
        activity: "Contributed talks",
        teaser:
          "https://drive.google.com/file/d/1Ba9H1VDws-KNw3VBxIotdfY88Evwp1X_/view?usp=sharing",
        abstract: `
          Context-sensitive analysis is more precise as it distinguishes between different calling contexts. VASCO (value-sensitive contexts) is a context-sensitive method designed for unidirectional analysis. It is designed algorithmically and uses data flow values to define context. Every procedure is analysed only once in a particular context for a particular data flow value. The algorithm additionally builds a context transition graph to identify the caller to return to, thereby eliminating interprocedurally invalid paths. However, this method is designed for unidirectional analysis.

          \n\nBidirectional analysis such as LFCPA (liveness based flow- and context-sensitive pointer analysis) computes points-to information for pointers that are live. It consists of two interacting components: liveness analysis and points-to analysis. It is interleaving of liveness and points-to analysis and is achieved by a fixed point computation of both the analysis. Liveness information is used to compute points-to information and points-to information in turn is used to identify further liveness.

          \n\nThe notion of value-sensitive contexts was defined for unidirectional data flow analyses. Using the same notion for bidirectional analysis by treating the component analyses as two unidirectional analyses leads to unsoundness. We propose the notion of value-sensitive contexts for bidirectional analyses and extend the VASCO algorithm to bidirectional analyses. We have implemented LFCPA using this notion of context and extending the implementation to support bypassing in LFCPA.
        `,
      },
      {
        id: "2_8",
        time: "12:30 - 12:50",
        icon: ClockIcon,
        highlightedHeading:
          "Context-Sensitive Interprocedural Dominance for SSA",
        speakers: "Supriya Bhide, Uday Khedker and Pritam Gharat",
        teaser:
          "https://drive.google.com/drive/folders/1YdjymR0Os5Iif_S-xcDl4OWwjMZTTgTZ",
        activity: "Contributed talks",
        abstract: `
          Static single assignment (SSA) is an intermediate representation widely used in production compilers like GCC, LLVM, etc. In SSA, every definition is unique, and exactly one definition reaches any use of a variable. This happens as SSA ensures that each use is dominated by its definition. When multiple definitions reach a program point, a φ-function is introduced which is a non-deterministic function that merges multiple definitions of a variable reaching a point into a new single definition. Optimal placement of φ-functions is crucial in SSA for its efficiency. This optimal placement is performed in classical SSA by placing φ-functions at dominance frontiers. This is determined by defining dominance and dominance frontier relations at the intraprocedural level. This paper extends the notion of dominance and dominance frontier to context-sensitive interprocedural level as a part of our long-term goal of creating context-sensitive interprocedural SSA (CoS-SSA).
        `,
      },
      {
        id: "2_9",
        time: "12:50 - 14:00",
        icon: TeaCupIconSrc,
        event: "Lunch Break",
      },
      {
        id: "2_10",
        time: "14:00 - 15:00",
        icon: ClockIcon,
        event: "Poster Session",
      },
      {
        id: "2_11",
        time: "15:00 - 15:30",
        icon: TeaCupIconSrc,
        event: "Tea Break",
      },
      {
        id: "2_12",
        time: "15:30 - 16:00",
        icon: ClockIcon,
        event: "Sponsor presentations",
      },
      {
        id: "2_13",
        time: "16:00 - 17:00",
        icon: ClockIcon,
        event: "Hackathon Presentations",
      },
      {
        id: "2_14",
        time: "17:00 - 17:20",
        icon: ClockIcon,
        highlightedHeading: "About CDAC compilers group",
        speakers: "CDAC",
        activity: "Sponsor presentation",
      },
      {
        id: "2_15",
        time: "17:20 - 17:25",
        icon: ClockIcon,
        event: "Prize distribution",
      },
    ],
  };

  return (
    <EventDetailsWrapper>
      <TabWrapper>
        {dayTabs.map((tab) => (
          <TabButton
            key={tab.id}
            selected={selectedDay.id === tab.id}
            onClick={() => setSelectedDay(tab)}
            type="button"
          >
            {tab.title}
          </TabButton>
        ))}
      </TabWrapper>
      <ContentWrapper>
        <ContentHeader>
          <Title>SAT 28 SEP</Title>
          <SubTitle>
            Displayed time zone:{" "}
            <span style={{ fontWeight: "bold" }}>
              India (Chennai, Kolkata, Mumbai, New Delhi)
            </span>
          </SubTitle>
        </ContentHeader>
        {scheduleItems[selectedDay.id].map((item, index) => (
          <React.Fragment key={item.id}>
            <ContentList>
              <LeftContent>
                <LeftContentIcon src={item.icon} /> {item.time}
              </LeftContent>
              <RightContent>
                {item.buttonText ? (
                  <EventButton onClick={() => {}}>
                    {item.buttonText}
                  </EventButton>
                ) : null}
                {item.event ? item.event : null}
                {item.highlightedHeading ? (
                  <HighlightedHeading onClick={() => setSelectedEvent(item)}>
                    {item.highlightedHeading}
                  </HighlightedHeading>
                ) : null}
                {item.speakers ? (
                  <SubHeading>{item.speakers}</SubHeading>
                ) : null}
              </RightContent>
            </ContentList>
            {scheduleItems[selectedDay.id].length - 1 !== index && <Divider />}
          </React.Fragment>
        ))}
      </ContentWrapper>
      <EventDetailModal
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={{
          name: selectedEvent?.highlightedHeading || "",
          type: selectedEvent?.activity || "",
          datetime: selectedDay.date + ", " + (selectedEvent?.time || ""),
          abstract: selectedEvent?.abstract || "",
          speakers: selectedEvent?.speakers || "",
          teaser: selectedEvent?.teaser || "",
        }}
      />
    </EventDetailsWrapper>
  );
}

const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #000000;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  padding: 0 6rem 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 3rem 4rem;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3rem 1.5rem;
    flex-direction: column;
  }
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #ffffff;
  border-radius: 8px;
  margin: 0px 0 40px;
  max-width: 1500px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 16px 0;
  }
`;

const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 16px 0;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(90deg, #367AFF 0%, #FF4DD8 100%)"
      : "transparent"};
  color: ${({ selected, theme }) => (selected ? "#fff" : theme.text)};
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-radius 0.2s, box-shadow 0.2s,
    transform 0.2s;
  outline: none;
  z-index: ${({ selected }) => (selected ? 2 : 1)};
  position: relative;

  border: none;
  border-radius: ${({ selected }) => (selected ? "8px" : "0")};
  box-shadow: ${({ selected }) =>
    selected ? "0 2px 8px 0 rgba(60, 60, 130, 0.10)" : "none"};
  transform: ${({ selected }) => (selected ? "scale(1.01, 1.04)" : "none")};
`;

const ContentWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  max-width: 1500px;
`;

const ContentHeader = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  border-radius: 16px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  flex: 1;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
    flex: 1;
  }
`;

const SubTitle = styled.h3`
  color: white;
  margin-top: 7px;
  font-weight: 400;
  font-size: 16px;
  flex: 1;
  height: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 0px;
    font-size: 14px;
    flex: 1;
  }
`;

const ContentList = styled.div`
  padding: 40px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #09100f;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    padding: 20px;
    font-size: 16px;
    gap: 10px;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
    text-align: center;
  }
`;

const RightContent = styled.div`
  flex: 5;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex: 1;
    text-align: center;
  }
`;

const Divider = styled.div`
  width: auto;
  height: 1px;
  margin: 0px 40px;
  background: #000000;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin: 0px 20px;
  }
`;

const EventButton = styled.button`
  background: transparent;
  border: 2px solid #000000;
  border-radius: 999px;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 24px;
  cursor: pointer;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
  padding: 7px 12px;
    margin-bottom: 8px;
  }
`;

const HighlightedHeading = styled.p`
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  line-height: 125%;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 8px;
  cursor: pointer;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
    margin-bottom: 6px;
  }
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #787878;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
  }
`;

const LeftContentIcon = styled.img`
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 24px;
    max-height: 24px;
  }
`;
