declare namespace WorkerPayload {
    namespace Raven {
        type CaptureWorkerException = {
            message: string;
            stack: string;
        };
    }

    namespace WorkerAbilityTest {
        type CommunicationTest = number;
        type HeartBeatTest = number;
    }
}

declare namespace WorkerReponse {
    namespace WorkerAbilityTest {
        type CommunicationTest = number;
        type HeartBeatTest = number;
    }
}
