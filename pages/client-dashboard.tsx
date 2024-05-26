import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderSpacer1 from "../components/header-spacer1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/footer";
import styles from "./client-dashboard.module.css";

const ClientDashboard: NextPageClientDashboardType = () => {
  const router = useRouter();

  const onBtnChatClick = useCallback(() => {
    router.push("/freelancer-chat");
  }, [router]);

  return (
    <div className={styles.clientDashboard}>
      <HeaderSpacer1 />
      <main className={styles.clientDashboardInner}>
        <section className={styles.frameParent}>
          <FrameComponent2 />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.activeJobsParent}>
                  <b className={styles.activeJobs}>Active Jobs</b>
                  <b className={styles.b}>5</b>
                  <div className={styles.trendingUpParent}>
                    <img
                      className={styles.trendingUpIcon}
                      loading="lazy"
                      alt=""
                      src="/trending-up.svg"
                    />
                    <div className={styles.div}>+2</div>
                  </div>
                </div>
                <div className={styles.youCreatedParent}>
                  <div className={styles.youCreated}>You created</div>
                  <b className={styles.extra2Jobs}>extra 2 jobs</b>
                  <div className={styles.thisMonth}>this month</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.monthlyCreatedJobsWrapper}>
                  <h1 className={styles.monthlyCreatedJobs}>
                    Monthly created Jobs
                  </h1>
                </div>
                <div className={styles.barsParent}>
                  <div className={styles.bars}>
                    <div className={styles.monthsBars}>
                      <div className={styles.barValues}>1000</div>
                    </div>
                    <div className={styles.monthsBars1}>
                      <div className={styles.div1}>900</div>
                    </div>
                    <div className={styles.monthsBars2}>
                      <div className={styles.div2}>800</div>
                    </div>
                    <div className={styles.monthsBars3}>
                      <div className={styles.div3}>700</div>
                    </div>
                    <div className={styles.monthsBars4}>
                      <div className={styles.div4}>600</div>
                    </div>
                    <div className={styles.monthsBars5}>
                      <div className={styles.div5}>500</div>
                    </div>
                    <div className={styles.monthsBars6}>
                      <div className={styles.div6}>400</div>
                    </div>
                    <div className={styles.monthsBars7}>
                      <div className={styles.div7}>300</div>
                    </div>
                    <div className={styles.monthsBars8}>
                      <div className={styles.div8}>200</div>
                    </div>
                    <div className={styles.monthsBars9}>
                      <div className={styles.div9}>100</div>
                    </div>
                    <div className={styles.sideSpacer} />
                    <div className={styles.spacer} />
                    <div className={styles.jan} />
                    <div className={styles.spacer1} />
                    <div className={styles.feb} />
                    <div className={styles.spacer2} />
                    <div className={styles.mar} />
                    <div className={styles.spacer3} />
                    <div className={styles.apr} />
                    <div className={styles.spacer4} />
                    <div className={styles.may} />
                    <div className={styles.spacer5} />
                    <div className={styles.jun} />
                    <div className={styles.spacer6} />
                    <div className={styles.jul} />
                    <div className={styles.spacer7} />
                    <div className={styles.aug} />
                    <div className={styles.spacer8} />
                    <div className={styles.sep} />
                    <div className={styles.spacer9} />
                    <div className={styles.oct} />
                    <div className={styles.spacer10} />
                    <div className={styles.nov} />
                    <div className={styles.spacer11} />
                    <div className={styles.dec} />
                    <div className={styles.spacer12} />
                  </div>
                  <div className={styles.daySpacer}>
                    <div className={styles.daySpacerChild} />
                    <div className={styles.jan1}>JAN</div>
                    <div className={styles.feb1}>FEB</div>
                    <div className={styles.mar1}>MAR</div>
                    <div className={styles.apr1}>APR</div>
                    <div className={styles.may1}>MAY</div>
                    <div className={styles.jun1}>JUN</div>
                    <div className={styles.jul1}>JUL</div>
                    <div className={styles.aug1}>AUG</div>
                    <div className={styles.sep1}>SEP</div>
                    <div className={styles.oct1}>OCT</div>
                    <div className={styles.nov1}>NOV</div>
                    <div className={styles.dec1}>DEC</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.jobsToApproveParent}>
                  <h1 className={styles.jobsToApprove}>Jobs to Approve</h1>
                  <div className={styles.emptyPendingJobsParent}>
                    <b className={styles.emptyPendingJobs}>1</b>
                    <div className={styles.pending}>pending</div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.btnDevitParent}>
                    <div className={styles.btnDevit}>
                      <img
                        className={styles.developerModeTvIcon}
                        loading="lazy"
                        alt=""
                        src="/developer-mode-tv1.svg"
                      />
                      <div
                        className={styles.developmentIt}
                      >{`Development & IT`}</div>
                    </div>
                    <h1 className={styles.developADefi}>
                      Develop a DeFi Dashboard for Hamster Coins
                    </h1>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameParent5}>
                      <div className={styles.gig2hire2Parent}>
                        <img
                          className={styles.gig2hire2Icon}
                          loading="lazy"
                          alt=""
                          src="/gig2hire-2.svg"
                        />
                        <div className={styles.interestedParent}>
                          <div className={styles.interested}>Interested:</div>
                          <div className={styles.parent}>
                            <b className={styles.b1}>5</b>
                            <div className={styles.freelance}>Freelance</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.toBeApprovedInParent}>
                        <div className={styles.toBeApproved}>
                          To Be approved in:
                        </div>
                        <div className={styles.timerParent}>
                          <img
                            className={styles.timerIcon}
                            alt=""
                            src="/timer2.svg"
                          />
                          <div className={styles.h58m23s}>
                            <span>48</span>
                            <b>H:</b>
                            <span>58</span>
                            <b>M:</b>
                            <span>23</span>
                            <b>S</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.btn}>
                      <b className={styles.text}>View Offer</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.yourActiveJobsWrapper}>
                <h1 className={styles.yourActiveJobs}>Your Active Jobs</h1>
              </div>
              <div className={styles.frameParent7}>
                <FrameComponent1
                  frame165="/frame-1651@2x.png"
                  max="Max"
                  developmentAndIT="Development and IT"
                  developADeFiDashboardForH="Develop a DeFi Dashboard for Hamster Coins"
                  timer="/timer-11.svg"
                  onBtnChatClick={onBtnChatClick}
                />
                <FrameComponent1
                  frame165="/frame-166@2x.png"
                  max="Carla"
                  developmentAndIT="Design and Creative"
                  developADeFiDashboardForH="UI/UX for e-Commerce selling Tea"
                  timer="/timer-2.svg"
                  propBorder="1px solid var(--orange-medium)"
                  propPadding="var(--padding-10xs) var(--padding-6xs)"
                  propColor="#f9a455"
                />
                <FrameComponent1
                  frame165="/frame-165-11@2x.png"
                  max="Carla"
                  developmentAndIT="AI services"
                  developADeFiDashboardForH="Create profile pictures for a Freelancer platform"
                  timer="/timer-2.svg"
                  propBorder="1px solid var(--orange-medium)"
                  propPadding="var(--padding-10xs) var(--padding-6xs)"
                  propColor="#f9a455"
                />
                <FrameComponent1
                  frame165="/frame-166-1@2x.png"
                  max="Sophie"
                  developmentAndIT={`Sales & Marketing`}
                  developADeFiDashboardForH="Organize Marketing strategy for Monkeys NFTs"
                  timer="/timer-4.svg"
                  propBorder="unset"
                  propPadding="var(--padding-8xs) var(--padding-5xs)"
                  propColor="rgba(110, 131, 255, 0.4)"
                />
                <FrameComponent1
                  frame165="/frame-165-21@2x.png"
                  max="Jake"
                  developmentAndIT="Writing and Translation"
                  developADeFiDashboardForH="Organize Marketing strategy for Monkeys NFTs"
                  timer="/timer-4.svg"
                  propBorder="unset"
                  propPadding="var(--padding-8xs) var(--padding-5xs)"
                  propColor="rgba(110, 131, 255, 0.4)"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClientDashboard;
