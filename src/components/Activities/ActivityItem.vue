<template lang="html">
  <div class="activity">
    <span class="date">{{formatDate(activity.created_at)}}</span> 
    <component :is="activity.type" :activity="activity"/>
  </div>
</template>

<script>
var moment = require('moment');

import WatchEvent from '@/components/Activities/Events/WatchEvent'
import PushEvent from '@/components/Activities/Events/PushEvent'
import ForkEvent from '@/components/Activities/Events/ForkEvent'
import CreateEvent from '@/components/Activities/Events/CreateEvent'
import DeleteEvent from '@/components/Activities/Events/DeleteEvent'
import PullRequestEvent from '@/components/Activities/Events/PullRequestEvent'
import IssuesEvent from '@/components/Activities/Events/IssuesEvent'
import IssueCommentEvent from '@/components/Activities/Events/IssueCommentEvent'
import PullRequestReviewCommentEvent from '@/components/Activities/Events/PullRequestReviewCommentEvent'
import CheckRunEvent from '@/components/Activities/Events/CheckRunEvent'
import CheckSuiteEvent from '@/components/Activities/Events/CheckSuiteEvent'
import CommitCommentEvent from '@/components/Activities/Events/CommitCommentEvent'
import FollowEvent from '@/components/Activities/Events/FollowEvent'
import GistEvent from '@/components/Activities/Events/GistEvent'
import ReleaseEvent from '@/components/Activities/Events/ReleaseEvent'
import PublicEvent from '@/components/Activities/Events/PublicEvent'
import DeployKeyEvent from '@/components/Activities/Events/DeployKeyEvent'
import ForkApplyEvent from '@/components/Activities/Events/ForkApplyEvent'
import GollumEvent from '@/components/Activities/Events/GollumEvent'
import InstallationEvent from '@/components/Activities/Events/InstallationEvent'
import InstallationRepositoriesEvent from '@/components/Activities/Events/InstallationRepositoriesEvent'
import LabelEvent from '@/components/Activities/Events/LabelEvent'
import MarketplacePurchaseEvent from '@/components/Activities/Events/MarketplacePurchaseEvent'
import MemberEvent from '@/components/Activities/Events/MemberEvent'
import OrgBlockEvent from '@/components/Activities/Events/OrgBlockEvent'
import PackageEvent from '@/components/Activities/Events/PackageEvent'
import PageBuildEvent from '@/components/Activities/Events/PageBuildEvent'
import ProjectCardEvent from '@/components/Activities/Events/ProjectCardEvent'
import ProjectColumnEvent from '@/components/Activities/Events/ProjectColumnEvent'
import ProjectEvent from '@/components/Activities/Events/ProjectEvent'
import PullRequestReviewEvent from '@/components/Activities/Events/PullRequestReviewEvent'
import RepositoryEvent from '@/components/Activities/Events/RepositoryEvent'
import RepositoryImportEvent from '@/components/Activities/Events/RepositoryImportEvent'
import RepositoryVulnerabilityAlertEvent from '@/components/Activities/Events/RepositoryVulnerabilityAlertEvent'
import SecurityAdvisoryEvent from '@/components/Activities/Events/SecurityAdvisoryEvent'
import StarEvent from '@/components/Activities/Events/StarEvent'
import TeamEvent from '@/components/Activities/Events/TeamEvent'
import DownloadEvent from '@/components/Activities/Events/DownloadEvent'




export default {
  name: 'activity-item',
  components: {
    WatchEvent,
    PushEvent,
    PublicEvent,
    ForkEvent,
    CreateEvent,
    DeleteEvent,
    PullRequestEvent,
    IssuesEvent,
    IssueCommentEvent,
    PullRequestReviewCommentEvent,
    CheckRunEvent,
    CheckSuiteEvent,
    CommitCommentEvent,
    FollowEvent,
    GistEvent,
    ReleaseEvent,
    DeployKeyEvent,
    ForkApplyEvent,
    GollumEvent,
    InstallationEvent,
    InstallationRepositoriesEvent,
    LabelEvent,
    MarketplacePurchaseEvent,
    MemberEvent,
    OrgBlockEvent,
    PackageEvent,
    PageBuildEvent,
    ProjectCardEvent,
    ProjectColumnEvent,
    ProjectEvent,
    PullRequestReviewEvent,
    RepositoryEvent,
    RepositoryImportEvent,
    RepositoryVulnerabilityAlertEvent,
    SecurityAdvisoryEvent,
    StarEvent,
    TeamEvent,
    DownloadEvent
  },
  props: ['activity'],
  methods: {
    formatDate: function($date){
      return moment($date).format('HH:mm on ddd Do MMM Y');
    }
  }
}
</script>

<style lang="less">
.activity{
  margin-bottom:20px;
  border-bottom:1px solid @border;
  padding: 20px 0px;
  &:last-of-type{
    border-bottom:0px;
  }
  .date{
    margin-bottom:10px;
    display:block;
    color:@black;
    font-size: 0.8rem;
    font-weight: bold;
  }
  a{
    color:@blue;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    }
  }
}
  
</style>
